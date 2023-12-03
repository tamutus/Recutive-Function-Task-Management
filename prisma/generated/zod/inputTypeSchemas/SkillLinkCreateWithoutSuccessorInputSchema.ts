import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { SkillCreateNestedOneWithoutPrecedesInputSchema } from './SkillCreateNestedOneWithoutPrecedesInputSchema';

export const SkillLinkCreateWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkCreateWithoutSuccessorInput> = z.object({
  info: z.string().optional().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  precursor: z.lazy(() => SkillCreateNestedOneWithoutPrecedesInputSchema)
}).strict();

export default SkillLinkCreateWithoutSuccessorInputSchema;
