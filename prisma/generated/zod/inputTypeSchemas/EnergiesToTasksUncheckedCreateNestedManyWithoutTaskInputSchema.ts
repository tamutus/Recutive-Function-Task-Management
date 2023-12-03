import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateWithoutTaskInputSchema } from './EnergiesToTasksCreateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { EnergiesToTasksCreateOrConnectWithoutTaskInputSchema } from './EnergiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { EnergiesToTasksCreateManyTaskInputEnvelopeSchema } from './EnergiesToTasksCreateManyTaskInputEnvelopeSchema';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';

export const EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema;
