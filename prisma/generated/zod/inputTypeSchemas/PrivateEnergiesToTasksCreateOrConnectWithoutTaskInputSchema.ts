import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema;
