import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksCreateWithoutTaskInputSchema } from './EnergiesToTasksCreateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const EnergiesToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTasksCreateOrConnectWithoutTaskInputSchema;
