import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema;
