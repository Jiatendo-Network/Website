import { Resend, CreateEmailResponseSuccess } from "resend";

/**
 * 
 * @param subject
 * @param to 
 * @param content 
 * @returns {Promise<CreateEmailResponseSuccess>}
 */
export const sendMail = async (subject: string, to: string, content: string): Promise<CreateEmailResponseSuccess> => {
    try {
        const resend = new Resend(process.env.RESEND_KEY as string)
        const { data, error } = await resend.emails.send({
            from: 'no-reply@jiatendo.network',
            to: [to],
            subject,
            html: content
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