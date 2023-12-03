import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const SkillLinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillLinkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillLinkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hourGate: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default SkillLinkScalarWhereWithAggregatesInputSchema;
