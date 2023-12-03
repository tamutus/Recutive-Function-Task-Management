import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  workId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startingValue: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  endingValue: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema;
