import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema } from './PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema';
import { PrivateEnergiesToTaskWorksWhereInputSchema } from './PrivateEnergiesToTaskWorksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { TaskWorkRelationFilterSchema } from './TaskWorkRelationFilterSchema';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const PrivateEnergiesToTaskWorksWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksWhereUniqueInput> = z.object({
  energyId_workId: z.lazy(() => PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_workId: z.lazy(() => PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  workId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  endingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
  work: z.union([ z.lazy(() => TaskWorkRelationFilterSchema),z.lazy(() => TaskWorkWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToTaskWorksWhereUniqueInputSchema;
