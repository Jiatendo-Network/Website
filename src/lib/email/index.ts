import { type ReactNode } from "react";
import { Resend, CreateEmailResponseSuccess } from "resend";

/**
 * 
 * @param subject
 * @param to 
 * @param content 
 * @returns {Promise<CreateEmailResponseSuccess>}
 */
export const sendMail = async (subject: string, to: string, content: ReactNode): Promise<CreateEmailResponseSuccess> => {
    try {
        const resend = new Resend(process.env.RESEND_KEY as string)
        const { data, error } = await resend.emails.send({
            from: 'no-reply@jiatendo.network',
            to: [to],
            subject,
            react: content,
        })
        
        if(error || !data) {
            throw error
        }

        return data
    }
    catch(error) {
        throw error
    }
}