import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema } from './PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';

export const PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema;
