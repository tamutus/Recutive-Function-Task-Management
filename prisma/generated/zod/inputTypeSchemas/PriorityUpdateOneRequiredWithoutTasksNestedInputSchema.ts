import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutTasksInputSchema } from './PriorityCreateWithoutTasksInputSchema';
import { PriorityUncheckedCreateWithoutTasksInputSchema } from './PriorityUncheckedCreateWithoutTasksInputSchema';
import { PriorityCreateOrConnectWithoutTasksInputSchema } from './PriorityCreateOrConnectWithoutTasksInputSchema';
import { PriorityUpsertWithoutTasksInputSchema } from './PriorityUpsertWithoutTasksInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutTasksInputSchema } from './PriorityUpdateToOneWithWhereWithoutTasksInputSchema';
import { PriorityUpdateWithoutTasksInputSchema } from './PriorityUpdateWithoutTasksInputSchema';
import { PriorityUncheckedUpdateWithoutTasksInputSchema } from './PriorityUncheckedUpdateWithoutTasksInputSchema';

export const PriorityUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => PriorityUpdateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutTasksNestedInputSchema;
