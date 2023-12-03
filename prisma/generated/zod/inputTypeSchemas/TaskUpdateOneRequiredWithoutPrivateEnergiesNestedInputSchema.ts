import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrivateEnergiesInputSchema } from './TaskCreateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TaskCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TaskUpsertWithoutPrivateEnergiesInputSchema } from './TaskUpsertWithoutPrivateEnergiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './TaskUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { TaskUpdateWithoutPrivateEnergiesInputSchema } from './TaskUpdateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
