import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema;
