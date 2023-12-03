import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const SkillLinkScalarWhereInputSchema: z.ZodType<Prisma.SkillLinkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillLinkScalarWhereInputSchema),z.lazy(() => SkillLinkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillLinkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillLinkScalarWhereInputSchema),z.lazy(() => SkillLinkScalarWhereInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hourGate: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default SkillLinkScalarWhereInputSchema;
