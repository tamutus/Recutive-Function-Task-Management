import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema } from './PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema } from './PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema } from './PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema';
import { PersonsToSkillPathsScalarWhereInputSchema } from './PersonsToSkillPathsScalarWhereInputSchema';

export const PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema;
