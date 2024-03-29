import * as z from "zod"
import { CompleteEvent, relatedEventSchema, CompleteTicket, relatedTicketSchema } from "./index"

export const userSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  events: CompleteEvent[]
  Ticket: CompleteTicket[]
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  events: relatedEventSchema.array(),
  Ticket: relatedTicketSchema.array(),
}))
