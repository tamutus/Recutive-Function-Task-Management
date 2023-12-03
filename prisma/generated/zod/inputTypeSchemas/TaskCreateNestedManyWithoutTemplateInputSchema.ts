import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutTemplateInputSchema } from './TaskCreateWithoutTemplateInputSchema';
import { TaskUncheckedCreateWithoutTemplateInputSchema } from './TaskUncheckedCreateWithoutTemplateInputSchema';
import { TaskCreateOrConnectWithoutTemplateInputSchema } from './TaskCreateOrConnectWithoutTemplateInputSchema';
import { TaskCreateManyTemplateInputEnvelopeSchema } from './TaskCreateManyTemplateInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutTemplateInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTemplateInputSchema),z.lazy(() => TaskCreateWithoutTemplateInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskCreateNestedManyWithoutTemplateInputSchema;
