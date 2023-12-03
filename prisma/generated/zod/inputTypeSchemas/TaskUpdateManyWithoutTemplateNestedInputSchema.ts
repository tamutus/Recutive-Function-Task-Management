import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutTemplateInputSchema } from './TaskCreateWithoutTemplateInputSchema';
import { TaskUncheckedCreateWithoutTemplateInputSchema } from './TaskUncheckedCreateWithoutTemplateInputSchema';
import { TaskCreateOrConnectWithoutTemplateInputSchema } from './TaskCreateOrConnectWithoutTemplateInputSchema';
import { TaskUpsertWithWhereUniqueWithoutTemplateInputSchema } from './TaskUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { TaskCreateManyTemplateInputEnvelopeSchema } from './TaskCreateManyTemplateInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithWhereUniqueWithoutTemplateInputSchema } from './TaskUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { TaskUpdateManyWithWhereWithoutTemplateInputSchema } from './TaskUpdateManyWithWhereWithoutTemplateInputSchema';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';

export const TaskUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTemplateInputSchema),z.lazy(() => TaskCreateWithoutTemplateInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskUpdateManyWithoutTemplateNestedInputSchema;
