"use client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// Helper to extract SVG options by group id
function extractOptions(svg: string, groupId: string): string[] {
    const groupMatch = svg.match(new RegExp(`<g[^>]*id="${groupId}"[^>]*>([\\s\\S]*?)<\\/g>`, "i"));
    if (!groupMatch) return [];
    // Extract each child <g>...</g> or <path>...</path> etc.
    const optionRegex = /<g[^>]*id="([^"]+)"[^>]*>[\s\S]*?<\/g>|<path[^>]*\/>/g;
    return (groupMatch[1].match(optionRegex) || []);
}

const PARTS = [
    { key: "face", label: "Face", groupId: "faces" },
    { key: "eyes", label: "Eyes", groupId: "eyes" },
    { key: "mouth", label: "Mouth", groupId: "mouths" },
    // Add more as needed
];

export default function AvatarEditor({
    initialConfig,
    onSave,
}: {
    initialConfig?: { face?: string; eyes?: string; mouth?: string };
    onSave: (svg: string, config: any) => void;
}) {
    const [menuSVG, setMenuSVG] = useState<string>("");
    const [selectedTab, setSelectedTab] = useState(PARTS[0].key);
    const [options, setOptions] = useState<{ [key: string]: string[] }>({});
    const [config, setConfig] = useState<any>(initialConfig || {});

    // Load and parse SVG menu
    useEffect(() => {
        fetch("/miieditor.svg")
            .then((res) => res.text())
            .then((svg) => {
                setMenuSVG(svg);
                const newOptions: any = {};
                PARTS.forEach((part) => {
                    newOptions[part.key] = extractOptions(svg, part.groupId);
                });
                setOptions(newOptions);
            });
    }, []);

    // Compose the avatar SVG from selected parts
    const composeAvatarSVG = () => {
        // You may want to use a template SVG and insert the selected parts
        return `
            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <g>${config.face || ""}</g>
                <g>${config.eyes || ""}</g>
                <g>${config.mouth || ""}</g>
            </svg>
        `;
    };

    // Handle part selection
    const handleSelect = (partKey: string, option: string) => {
        setConfig((prev: any) => ({ ...prev, [partKey]: option }));
    };

    const handleSave = () => {
        const svg = composeAvatarSVG();
        onSave(svg, config);
        toast.success("Avatar saved!");
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Customize Your Avatar</h2>
            {/* Live Preview */}
            <div className="mb-6">
                <div
                    className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: composeAvatarSVG() }}
                />
            </div>
            {/* Tabs */}
            <div className="flex gap-4 mb-4">
                {PARTS.map((part) => (
                    <button
                        key={part.key}
                        className={`px-4 py-2 rounded-t-lg font-semibold ${selectedTab === part.key
                                ? "bg-blue-600 text-white"
                                : "bg-blue-100 text-blue-700"
                            }`}
                        onClick={() => setSelectedTab(part.key)}
                    >
                        {part.label}
                    </button>
                ))}
            </div>
            {/* Options Grid */}
            <div className="grid grid-cols-5 gap-4 mb-6">
                {options[selectedTab]?.map((option, idx) => (
                    <div
                        key={idx}
                        className={`cursor-pointer border-2 rounded-lg p-2 transition ${config[selectedTab] === option
                                ? "border-blue-600 bg-blue-50"
                                : "border-transparent"
                            }`}
                        onClick={() => handleSelect(selectedTab, option)}
                        dangerouslySetInnerHTML={{ __html: option.replace(/fill="[^"]*"/g, 'fill="#2563eb"') }}
                    />
                ))}
            </div>
            <button
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow"
                onClick={handleSave}
            >
                Save Avatar
            </button>
        </div>
    );
}
