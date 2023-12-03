import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';

export const PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema;
