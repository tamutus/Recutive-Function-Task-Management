import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateWithoutTagInputSchema } from './PersonsToTagsCreateWithoutTagInputSchema';
import { PersonsToTagsUncheckedCreateWithoutTagInputSchema } from './PersonsToTagsUncheckedCreateWithoutTagInputSchema';
import { PersonsToTagsCreateOrConnectWithoutTagInputSchema } from './PersonsToTagsCreateOrConnectWithoutTagInputSchema';
import { PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PersonsToTagsCreateManyTagInputEnvelopeSchema } from './PersonsToTagsCreateManyTagInputEnvelopeSchema';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema } from './PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { PersonsToTagsScalarWhereInputSchema } from './PersonsToTagsScalarWhereInputSchema';

export const PersonsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PersonsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToTagsScalarWhereInputSchema),z.lazy(() => PersonsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;
