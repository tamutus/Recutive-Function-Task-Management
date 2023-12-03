import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutImplementationsInputSchema } from './TaskTemplateCreateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedCreateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { TaskTemplateCreateOrConnectWithoutImplementationsInputSchema } from './TaskTemplateCreateOrConnectWithoutImplementationsInputSchema';
import { TaskTemplateUpsertWithoutImplementationsInputSchema } from './TaskTemplateUpsertWithoutImplementationsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema';
import { TaskTemplateUpdateWithoutImplementationsInputSchema } from './TaskTemplateUpdateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema';

export const TaskTemplateUpdateOneWithoutImplementationsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneWithoutImplementationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutImplementationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutImplementationsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutImplementationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneWithoutImplementationsNestedInputSchema;
