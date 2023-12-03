import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema;
