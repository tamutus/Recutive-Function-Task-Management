import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsScalarWhereInputSchema } from './EnergiesToPersonsScalarWhereInputSchema';
import { EnergiesToPersonsUpdateManyMutationInputSchema } from './EnergiesToPersonsUpdateManyMutationInputSchema';
import { EnergiesToPersonsUncheckedUpdateManyWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedUpdateManyWithoutPersonInputSchema';

export const EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPersonsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema;
