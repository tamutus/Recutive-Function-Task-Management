import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const SkillLinkUncheckedCreateWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkUncheckedCreateWithoutSuccessorInput> = z.object({
  precursorId: z.number().int(),
  info: z.string().optional().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default SkillLinkUncheckedCreateWithoutSuccessorInputSchema;
