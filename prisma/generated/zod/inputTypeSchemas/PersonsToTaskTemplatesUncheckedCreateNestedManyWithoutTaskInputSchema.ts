import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';

export const PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema;
