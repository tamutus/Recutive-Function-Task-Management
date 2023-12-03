import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateWithoutPersonInputSchema } from './PersonsToSkillPathsCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema } from './PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema } from './PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema } from './PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema } from './PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema } from './PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema';
import { PersonsToSkillPathsScalarWhereInputSchema } from './PersonsToSkillPathsScalarWhereInputSchema';

export const PersonsToSkillPathsUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillPathsUpdateManyWithoutPersonNestedInputSchema;
