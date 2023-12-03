import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEditedTasksInputSchema } from './PersonCreateWithoutEditedTasksInputSchema';
import { PersonUncheckedCreateWithoutEditedTasksInputSchema } from './PersonUncheckedCreateWithoutEditedTasksInputSchema';
import { PersonCreateOrConnectWithoutEditedTasksInputSchema } from './PersonCreateOrConnectWithoutEditedTasksInputSchema';
import { PersonUpsertWithoutEditedTasksInputSchema } from './PersonUpsertWithoutEditedTasksInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutEditedTasksInputSchema } from './PersonUpdateToOneWithWhereWithoutEditedTasksInputSchema';
import { PersonUpdateWithoutEditedTasksInputSchema } from './PersonUpdateWithoutEditedTasksInputSchema';
import { PersonUncheckedUpdateWithoutEditedTasksInputSchema } from './PersonUncheckedUpdateWithoutEditedTasksInputSchema';

export const PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutEditedTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEditedTasksInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutEditedTasksInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutEditedTasksInputSchema),z.lazy(() => PersonUpdateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedTasksInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutEditedTasksNestedInputSchema;
