import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  workId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startingValue: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  endingValue: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema;
