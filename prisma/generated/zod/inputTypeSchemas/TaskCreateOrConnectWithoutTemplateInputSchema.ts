import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutTemplateInputSchema } from './TaskCreateWithoutTemplateInputSchema';
import { TaskUncheckedCreateWithoutTemplateInputSchema } from './TaskUncheckedCreateWithoutTemplateInputSchema';

export const TaskCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutTemplateInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutTemplateInputSchema;
