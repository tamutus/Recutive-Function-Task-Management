import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const EnergiesToPersonsScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToPersonsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPersonsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default EnergiesToPersonsScalarWhereInputSchema;
