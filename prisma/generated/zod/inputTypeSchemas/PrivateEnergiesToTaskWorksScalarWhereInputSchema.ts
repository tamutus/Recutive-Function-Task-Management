import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const PrivateEnergiesToTaskWorksScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  workId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  endingValue: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksScalarWhereInputSchema;
