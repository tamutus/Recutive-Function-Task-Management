import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema;
