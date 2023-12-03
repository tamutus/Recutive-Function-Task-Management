import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { PersonsToTaskTemplatesScalarWhereInputSchema } from './PersonsToTaskTemplatesScalarWhereInputSchema';

export const PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema;
