import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsScalarWhereInputSchema } from './PrivateEnergiesToProjectsScalarWhereInputSchema';
import { PrivateEnergiesToProjectsUpdateManyMutationInputSchema } from './PrivateEnergiesToProjectsUpdateManyMutationInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema;
