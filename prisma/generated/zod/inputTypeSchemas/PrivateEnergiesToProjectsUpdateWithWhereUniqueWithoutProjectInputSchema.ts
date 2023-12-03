import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema;
