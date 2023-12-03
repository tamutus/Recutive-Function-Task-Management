import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { SkillCreateNestedOneWithoutSucceedsInputSchema } from './SkillCreateNestedOneWithoutSucceedsInputSchema';

export const SkillLinkCreateWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkCreateWithoutPrecursorInput> = z.object({
  info: z.string().optional().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  successor: z.lazy(() => SkillCreateNestedOneWithoutSucceedsInputSchema)
}).strict();

export default SkillLinkCreateWithoutPrecursorInputSchema;
