import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const SkillLinkCreateManyPrecursorInputSchema: z.ZodType<Prisma.SkillLinkCreateManyPrecursorInput> = z.object({
  successorId: z.number().int(),
  info: z.string().optional().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default SkillLinkCreateManyPrecursorInputSchema;
