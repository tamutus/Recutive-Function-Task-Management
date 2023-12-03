import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutPrecedesNestedInputSchema } from './SkillUpdateOneRequiredWithoutPrecedesNestedInputSchema';
import { SkillUpdateOneRequiredWithoutSucceedsNestedInputSchema } from './SkillUpdateOneRequiredWithoutSucceedsNestedInputSchema';

export const SkillLinkUpdateInputSchema: z.ZodType<Prisma.SkillLinkUpdateInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hourGate: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  precursor: z.lazy(() => SkillUpdateOneRequiredWithoutPrecedesNestedInputSchema).optional(),
  successor: z.lazy(() => SkillUpdateOneRequiredWithoutSucceedsNestedInputSchema).optional()
}).strict();

export default SkillLinkUpdateInputSchema;
