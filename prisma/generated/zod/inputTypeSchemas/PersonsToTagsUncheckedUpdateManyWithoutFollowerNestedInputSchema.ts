import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateWithoutFollowerInputSchema } from './PersonsToTagsCreateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedCreateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedCreateWithoutFollowerInputSchema';
import { PersonsToTagsCreateOrConnectWithoutFollowerInputSchema } from './PersonsToTagsCreateOrConnectWithoutFollowerInputSchema';
import { PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema } from './PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema';
import { PersonsToTagsCreateManyFollowerInputEnvelopeSchema } from './PersonsToTagsCreateManyFollowerInputEnvelopeSchema';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema } from './PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema';
import { PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema } from './PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema';
import { PersonsToTagsScalarWhereInputSchema } from './PersonsToTagsScalarWhereInputSchema';

export const PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema).array(),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTagsCreateOrConnectWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsCreateOrConnectWithoutFollowerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUpsertWithWhereUniqueWithoutFollowerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTagsCreateManyFollowerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToTagsScalarWhereInputSchema),z.lazy(() => PersonsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInputSchema;
