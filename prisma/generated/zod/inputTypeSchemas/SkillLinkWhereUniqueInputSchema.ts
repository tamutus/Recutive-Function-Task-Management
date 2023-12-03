import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema } from './SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema';
import { SkillLinkWhereInputSchema } from './SkillLinkWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillLinkWhereUniqueInputSchema: z.ZodType<Prisma.SkillLinkWhereUniqueInput> = z.object({
  precursorId_successorId: z.lazy(() => SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema)
})
.and(z.object({
  precursorId_successorId: z.lazy(() => SkillLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillLinkWhereInputSchema),z.lazy(() => SkillLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillLinkWhereInputSchema),z.lazy(() => SkillLinkWhereInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hourGate: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  precursor: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  successor: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict());

export default SkillLinkWhereUniqueInputSchema;
