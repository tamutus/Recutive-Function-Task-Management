import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTasksInputSchema } from './PersonCreateWithoutTasksInputSchema';
import { PersonUncheckedCreateWithoutTasksInputSchema } from './PersonUncheckedCreateWithoutTasksInputSchema';
import { PersonCreateOrConnectWithoutTasksInputSchema } from './PersonCreateOrConnectWithoutTasksInputSchema';
import { PersonUpsertWithoutTasksInputSchema } from './PersonUpsertWithoutTasksInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutTasksInputSchema } from './PersonUpdateToOneWithWhereWithoutTasksInputSchema';
import { PersonUpdateWithoutTasksInputSchema } from './PersonUpdateWithoutTasksInputSchema';
import { PersonUncheckedUpdateWithoutTasksInputSchema } from './PersonUncheckedUpdateWithoutTasksInputSchema';

export const PersonUpdateOneWithoutTasksNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutTasksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => PersonUpdateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneWithoutTasksNestedInputSchema;
