import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsScalarWhereInputSchema } from './PrivateEnergiesToProjectsScalarWhereInputSchema';
import { PrivateEnergiesToProjectsUpdateManyMutationInputSchema } from './PrivateEnergiesToProjectsUpdateManyMutationInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema';

export const PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema;
