import { z } from 'zod';
import { DecimalJSLikeSchema } from '../inputTypeSchemas/DecimalJsLikeSchema'
import { isValidDecimalInput } from '../inputTypeSchemas/isValidDecimalInput'

/////////////////////////////////////////
// SKILL LINK SCHEMA
/////////////////////////////////////////

/**
 * Tracks which skills are needed for more advanced skills
 */
export const SkillLinkSchema = z.object({
  precursorId: z.number().int(),
  successorId: z.number().int(),
  info: z.string().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'hourGate' must be a Decimal. Location: ['Models', 'SkillLink']",  }),
})

export type SkillLink = z.infer<typeof SkillLinkSchema>

export default SkillLinkSchema;
