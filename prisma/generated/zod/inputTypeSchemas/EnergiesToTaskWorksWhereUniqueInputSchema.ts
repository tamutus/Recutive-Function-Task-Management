import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema } from './EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema';
import { EnergiesToTaskWorksWhereInputSchema } from './EnergiesToTaskWorksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { TaskWorkRelationFilterSchema } from './TaskWorkRelationFilterSchema';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const EnergiesToTaskWorksWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksWhereUniqueInput> = z.object({
  energyId_workId: z.lazy(() => EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_workId: z.lazy(() => EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToTaskWorksWhereInputSchema),z.lazy(() => EnergiesToTaskWorksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTaskWorksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTaskWorksWhereInputSchema),z.lazy(() => EnergiesToTaskWorksWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  workId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  endingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
  work: z.union([ z.lazy(() => TaskWorkRelationFilterSchema),z.lazy(() => TaskWorkWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToTaskWorksWhereUniqueInputSchema;
