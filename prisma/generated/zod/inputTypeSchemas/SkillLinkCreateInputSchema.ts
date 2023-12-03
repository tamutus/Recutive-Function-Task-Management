import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { SkillCreateNestedOneWithoutPrecedesInputSchema } from './SkillCreateNestedOneWithoutPrecedesInputSchema';
import { SkillCreateNestedOneWithoutSucceedsInputSchema } from './SkillCreateNestedOneWithoutSucceedsInputSchema';

export const SkillLinkCreateInputSchema: z.ZodType<Prisma.SkillLinkCreateInput> = z.object({
  info: z.string().optional().nullable(),
  hourGate: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  precursor: z.lazy(() => SkillCreateNestedOneWithoutPrecedesInputSchema),
  successor: z.lazy(() => SkillCreateNestedOneWithoutSucceedsInputSchema)
}).strict();

export default SkillLinkCreateInputSchema;
