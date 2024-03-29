import * as z from "zod"
import { CompleteEvent, relatedEventSchema, CompleteUser, relatedUserSchema } from "./index"

export const ticketSchema = z.object({
  id: z.number().int(),
  eventId: z.number().int(),
  userId: z.number().int(),
  status: z.string(),
})

export interface CompleteTicket extends z.infer<typeof ticketSchema> {
  event: CompleteEvent
  user: CompleteUser
}

/**
 * relatedTicketSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedTicketSchema: z.ZodSchema<CompleteTicket> = z.lazy(() => ticketSchema.extend({
  event: relatedEventSchema,
  user: relatedUserSchema,
}))
