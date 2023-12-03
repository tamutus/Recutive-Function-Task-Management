import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema';
import { TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema } from './TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema';
import { TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema } from './TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema } from './TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema';
import { TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema } from './TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema';
import { TaskTemplateLinkScalarWhereInputSchema } from './TaskTemplateLinkScalarWhereInputSchema';

export const TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskTemplateLinkScalarWhereInputSchema),z.lazy(() => TaskTemplateLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema;
