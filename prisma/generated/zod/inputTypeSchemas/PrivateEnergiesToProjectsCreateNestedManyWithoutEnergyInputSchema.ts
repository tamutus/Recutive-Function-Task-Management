import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';

export const PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema;
