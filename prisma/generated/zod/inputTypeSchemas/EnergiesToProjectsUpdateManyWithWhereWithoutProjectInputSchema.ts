import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsScalarWhereInputSchema } from './EnergiesToProjectsScalarWhereInputSchema';
import { EnergiesToProjectsUpdateManyMutationInputSchema } from './EnergiesToProjectsUpdateManyMutationInputSchema';
import { EnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema';

export const EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema;
