import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema } from './PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';

export const PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema;
