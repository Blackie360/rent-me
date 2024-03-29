import * as z from "zod"
import { CompleteTicket, relatedTicketSchema, CompleteUser, relatedUserSchema } from "./index"

export const eventSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  image: z.string().nullish(),
  price: z.number(),
  amount: z.number().int(),
  availability: z.boolean(),
  date: z.date(),
})

export interface CompleteEvent extends z.infer<typeof eventSchema> {
  tickets: CompleteTicket[]
  users: CompleteUser[]
}

/**
 * relatedEventSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedEventSchema: z.ZodSchema<CompleteEvent> = z.lazy(() => eventSchema.extend({
  tickets: relatedTicketSchema.array(),
  users: relatedUserSchema.array(),
}))
