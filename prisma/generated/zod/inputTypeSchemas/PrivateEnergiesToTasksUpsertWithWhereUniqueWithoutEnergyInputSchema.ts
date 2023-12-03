import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema;
